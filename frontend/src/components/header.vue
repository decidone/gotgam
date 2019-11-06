<template>
    <header class="header">
        <div class="wrap">
            <div id="hamburger" v-on:click="display_menu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <router-link :to="logo.link"><img src="../assets/logo2.png" alt="logo"></router-link>
            <nav id="menu">
                <li class="drop"><a v-on:click="display_drop_menu()">Travel</a>
                    <ul class="drop_menu">
                        <router-link :to="regiontravel.link">지역별</router-link>
                        <router-link :to="moodtravel.link">기분별</router-link>
                    </ul>
                </li>
				<li><router-link :to="registration.link">Registration</router-link></li>
                <li><router-link :to="about.link">About</router-link></li>
				<li>
					<div class="login_bar">
						<!-- login -->
						<router-link :to="login.link">Login</router-link>

						<!-- 내정보 dropdown -->
						<b-nav-item-dropdown
						id="my-nav-dropdown"
						text="내정보"
						toggle-class="nav-link-custom"
						right
						>
						<b-dropdown-item>
							<router-link class="mypage" :to="mypage.link">My Page</router-link>
						</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item>
							<button class="logoutbtn" v-on:click="logout">Logout</button>
						</b-dropdown-item>
						</b-nav-item-dropdown>
					</div>
				</li>
            </nav>
        </div>
    </header>
</template>

<script>
import * as header from '../js/header.js';

export default {
	data() {
    	return {
			logo: {
        		link: "/"
			  },
			  registration: {
				  link: "/registration"
			  },
			  about: {
				  link: '/about'
			  },
			  regiontravel: {
				  link: "/regiontravel"
			  },
			  moodtravel: {
				  link: "/moodtravel"
			  },
			  login: {
				  link: "login"
			  },
			  mypage: {
				  link: "/mypage"
			  }
		};
	},

	methods: {
		display_menu : function() {
			var body = document.getElementsByTagName("body")[0];
			(!body.classList.contains("display_menu")) ? body.classList.add("display_menu") : body.classList.remove("display_menu");
		},
		display_drop_menu : function() {
			var drop_menu = event.target.parentElement.getElementsByClassName("drop_menu")[0];
			var drop_menus = document.getElementsByClassName("drop_menu");

			Array.from(drop_menus).forEach(function(e) {
				if(e != drop_menu) {
					e.classList.remove("display");
				}
			});

			var lis = document.getElementById("menu").getElementsByTagName("li");
			Array.from(lis).forEach(function(e) {
				e.style.marginTop = 0;
			});

			(!drop_menu.classList.contains("display")) ? drop_menu.classList.add("display") : drop_menu.classList.remove("display");

			if(window.innerWidth < 660 && drop_menu.classList.contains("display")) {
				event.target.parentElement.nextSibling.nextSibling.style.marginTop = drop_menu.clientHeight + "px";
			}
		},
		
		logout: function (event) {
			this.$http.get('/api/users/logout',
				this.user
			)
			.then(
				(res) => { //no error
					if(res.data.success){
						alert(res.data.message)
						this.$router.push('/') 
					}
				}
			)
			.catch(err => {
				alert(err);
			})
		}
	}
}
</script>

<style lang="less">
	.wrap {
		width: 100%;
	}

	@cblue : #ff4401;
	@cgrey : #3E3A37;
	@cwhite : #ffffff;
	@ccream : #FAFBFC;
	@cgrey_green: #435466;
	@clightgrey : #DAD9D7;

	@body_height_8: calc((100vh - 113px)/8);
	@body_height_4: calc((100vh - 113px)/4);

	.icon-arrow {
		mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
	}

	i {
		vertical-align: middle;
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	body {&.display_menu{overflow-y: hidden;}}
	
	.header {
		display: flex;
		z-index: 3;
		padding: 10px 0;
		background-color: @ccream;
		position: fixed;
		width: 100%;
		top: 0;
		justify-content: center;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
		transition: 0.33s;
	}
	
	.header .wrap {
		padding: 0 2%;
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	
	.header img {
		width: 100px;
	}
	
	.header #menu {
		display: flex;
		flex-direction: row;
	}
	
	.header #menu li {
		position: relative;
		user-select: none;
		margin: 0 30px;

		i {width: 12px; height: 12px; background-color: @cgrey;}
		
		a {
			color: @cgrey;
			cursor: pointer;
			font-size: 1.15em;
			border: none;
			border-bottom: 2px solid @cwhite;
			transition: 0.15s;
			background: none;
			text-decoration: none;
			&:hover {
				border-bottom-color: @cblue;
				color: @cblue;
				i {
				background-color: @cblue;
				}
			}
		}
	}

	.header .drop_menu {
		position: absolute;
		display: block;
		top: 149%;
		left: -15px;
		transform: scaleY(0);
		width: 90px;
		transform-origin: top;
		background-color: @cwhite;
		transition: 0.25s;
		padding-bottom: 10px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
		
		a {
			margin-left: 20px;
			display: block;
			transition: 0.45s;
			opacity: 0;
			margin-right: 20px;
			padding: 10px 0 0 0;
		}
	}

	.header .drop_menu.display {
		transform: scaleY(1);
		
		a {
			opacity: 1;
		}
	}

	.header #hamburger {
		cursor: pointer;
		border-radius: 50%;
		position: absolute;
		left: 3%;
		top: 30px;
		display: none;
		transform: translateY(-50%);
	}

	.header #hamburger span {
		height: 2px;
		margin-top: 5px;
		margin-bottom: 5px;
		background-color: @cgrey;
		display: block;
		transition: 0.33s;
		&:nth-child(1) {width: 12px;}
		&:nth-child(2) {width: 24px;}
		&:nth-child(3) {width: 12px;}
	}

	.display_menu .header #hamburger {
		span:nth-child(1) {transform: rotate(45deg) translate(2px, 1px);}
		span:nth-child(2) {transform: rotate(-45deg);}
		span:nth-child(3) {transform: rotate(45deg) translate(6px, -9px);}
	}

	.login_bar {
		display: flex;

		a {
			display: block;
			transition: 0.45s;
			margin-right: 20px;
			color: #3E3A37;
			font-size: 1.15em;
			text-decoration: none;
		}
	}

	@media screen and (max-width: 660px) {
		body {padding-top: 70px;}
		
		.header .wrap {
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 0;
		}
		
		.header img {width: 50px;}
		
		.header #hamburger {
			display: block;
		}
		
		.header #menu {
			width: 100%;
			display: block;
			height: 0;
			transform-origin: 50% 0;
			transition: 0.33s ease;
			flex-direction: column;
		}
		
		.display_menu .header #menu {
			height: calc(100vh - 64px);
			
			li {
				height: @body_height_8;
				border-bottom: 1px solid @clightgrey;
				transition: 0.25s ease;
				opacity: 1;
				display: block;
			}
		}

		.header #menu li {
			height: 0;
			opacity: 0;
			margin-left: 0;
			transition: 0.25s ease;
			
			a {
				left: 0;
				line-height: @body_height_8;
				padding-left: 20px;
				border: none;
				height: 100%;
				width: 100%;
				display: block;
				&:hover {
					color: @cwhite;
					background-color: @cblue;
					i {background-color: @cwhite;}
				}
			}
			
			i {
				position: absolute;
				right: 20px;
				top: 50%;
				transform: translateY(-50%);
				background-color: @cgrey;
			}
		}

		.header .drop_menu {
			top: @body_height_8;
			box-shadow: none;
			left: 0;
			padding-bottom: 0;
			width: 100%;
			a {
				width: 100%;
				padding: 0 !important;
				padding-left: 40px !important;
				margin: 0;
				border-bottom: 1px solid @clightgrey !important;
			}
		}

		.login_bar {
			display: inline;
		}
	}

	@media screen and(max-width: 660px) and(max-height: 500px) {
		.display_menu .header  {
			max-height: 100vh;
			overflow-y: scroll;
		}

		.display_menu .header #menu {
			li {
				height: @body_height_4;
			}
		}

		.header #menu li {
			a {
				line-height: @body_height_4;
			}
		}

		.header .drop_menu {
			top: @body_height_4;
		}

		.login_bar {
			display: inline;
		}
	}

	i {
		vertical-align: middle;
		display: inline-block;
		background-repeat: no-repeat;
	}

	.dropdown-menu li {
		width: 100%;
		margin: 0 !important;
		text-align: center;
	}
	
	.logoutbtn {
		width: 100%;
		background: transparent;
		border: none;
		font-size: 1.15em;
	}

	.logoutbtn:hover {
		color: #ff4401;
	}

	.mypage, .mypage:hover {
		width: 100%;
		display: inline-block;
		transition: 0s !important;
		border-bottom: none !important;
	}

	.nav-link {
		padding: 0;
	}
</style>