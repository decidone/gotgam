<template>
  <div class="best_card_wrap">
    <div class="best_card_title">
        <h2>Best 곶감</h2>
    </div>
    <div class="best_card_body">
        <div class="best_card_inner">

            <div class="card_col_wrap">
                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image1"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>제부도</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image2"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>남이섬</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="card_col_wrap">
                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image3"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>파주 출판단지</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image4"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>허브 아일랜드</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card_col_wrap">
                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image5"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>소금산 출렁다리</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card_col_cell">
                    <div class="card_inner_cell">
                        <div class="card_hover_cell">
                            <div class="card_image6"></div>
                            <div class="card_overlay">&nbsp;</div>
                            <div class="card_content">
                                <div class="card_text_wrap">
                                    <div class="card_text_subtitle">
                                        <p>현유진</p>
                                    </div>
                                    <div class="card_text_title">
                                        <h4>제이드 가든</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.best_card_wrap {
    padding: 3.4rem 0;
    border-top: 1px solid #e4e5ec;
    margin: 0 auto;
}

.best_card_title h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.best_card_body {
    margin-top: 2.2rem;
}

.best_card_inner {
    display: flex;
    margin: -6px;
}

.card_col_wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card_col_cell {
    display: flex;
}

.card_inner_cell {
    width: 100%;
    /* min-width: 100px;
    max-width: 100px; */
    height: 100%;
    display: flex;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.card_hover_cell {
    cursor: pointer;
    position: relative;
    width: 100%;
}

.card_image1 {
    background: url(../assets/jaebudo.png) no-repeat;
    padding-top: 130%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_image2 {
    background: url(../assets/island.png) no-repeat;
    padding-top: 90%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_image3 {
    background: url(../assets/paju.jpg) no-repeat;
    padding-top: 80%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_image4 {
    background: url(../assets/herb.png) no-repeat;
    padding-top: 140%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_image5 {
    background: url(../assets/bridge.png) no-repeat;
    padding-top: 110%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_image6 {
    background: url(../assets/jade.png) no-repeat;
    padding-top: 110%;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
}

.card_overlay {
    background: linear-gradient(0deg, #000 2%, transparent 40%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}

.card_content {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 0 1.2rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 1.2rem;
}

.card_text_subtitle {
    display: flex;
}

.card_text_subtitle p {
    font-weight: 400;
    color: #fff;
    font-size: .75rem;
    line-height: 1.25rem;
}

.card_text_title {
    display: flex;
    cursor: pointer;
}

.card_text_title h4 {
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
}
</style>