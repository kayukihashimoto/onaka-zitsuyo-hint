<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="images">
          <div class="images__item">
            <span>
              おなかが張っている
            </span>
            <img src="@/assets/images/hari.webp" width="160">
          </div>
          <div class="images__item--main">
            <span>
              食事をすると<br class="is-sp">下痢をする
            </span>
            <img src="@/assets/images/geri.webp" width="200">
          </div>
          <div class="images__item">
            <span>
              おなかが<br class="is-sp">ゴロゴロしてる
            </span>
            <img src="@/assets/images/gorogoro.webp" width="160">
          </div>
        </div>

        <h1>
          おなかの不調、<br>
          きちんと向き合っていますか？
        </h1>
        <p>
          みんなと同じ食事をしているのに自分だけおなかの調子がよくない。<br>
          食物アレルギーの検査をしても問題ない。<br class="is-sp">おなかの不調が気になって、せっかくの食事を楽しめない。 <br><br>

          このページに訪れたあなたも、<br class="is-sp">もしかするとおなかの不調に悩んでいるのかもしれません。<br>
          おなかの不調を見逃さず、まずは自分のからだを見つめ直してみませんか？
        </p>
      </div>
    </section>

    <section id="fucyo" class="fucyo">
      <div class="fucyo__content">
        <div class="text">
          <h2>
            おなかの不調？
          </h2>

          <p>
            私は元々おなかの調子が悪く、下痢や便秘を交互に繰り返していました。症状は悪化し、からだだけでなく、こころまでも壊してしまい、食事を楽しむことはもちろん、外出することも大変な日々を過ごしていました。このページでは、私が体験したおなかの不調とこころの不調についてお話します。
          </p>

          <AtomsButton to="/fucyo" />
        </div>

        <img src="@/assets/images/fucyo.webp" width="360">
      </div>
    </section>

    <section id="hint" class="hint">
      <div class="hint__content">
        <div class="title">
          <h2>
            不調と向き合うわたしの実用ヒント
          </h2>

          <p>
            今は薬を飲みながら治療中ですが、<br>
            電車に乗って移動し、外出先で食事もできるようになりました。<br><br>

            私なりに問題に対処した具体的な克服方法や工夫した実用的なヒントを紹介します。
          </p>
        </div>

        <section class="hint-item">
          <div class="text">
            <h3>
              自分に合う食べ物を知る
            </h3>

            <p>
              おなかの不調をきっかけに、自分に合う食べ物を見つけるために食事記録をはじめました。毎日の食べ物とおなかの調子を記録しながら、自分に合う・合わない食べ物を見つける実用的なヒントを紹介します。
            </p>

            <AtomsButton to="/food" label="実用ヒントをくわしく見る" />
          </div>

          <img src="@/assets/images/food.webp" width="360">
        </section>

        <section class="hint-item--reverse">
          <div class="text">
            <h3>
              こころのケアをする
            </h3>

            <p>
              おなかの不調がこころの健康にも影響することを体験し、「こころのケア」を生活に取り入れました。適切な医療処置とアドバイスを受け、無理をしないことや薬を活用することで、外出先での食事を楽しむ方法を紹介します。
            </p>

            <AtomsButton to="/care" label="実用ヒントをくわしく見る" />
          </div>

          <img src="@/assets/images/care.webp" width="360">
        </section>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about__content">
        <div class="title">
          <h2>
            このサイトについて
          </h2>

          <p>
            本ウェブサイトの情報は個人的な情報提供を目的としており、<br>
            医学的アドバイスを代替するものではありません。<br>
            症状や健康上の懸念がある場合は、必ず医療専門家に相談してください。
          </p>
        </div>

        <section class="references">
          <h2>
            参考文献
          </h2>

          <ul>
            <li>
              なんだかよくわからない「お腹の不調」はこの食事で治せる！ 江田 証 二〇二〇年<br>
            </li>
            <li>
              機能性消化管疾患診療ガイドライン2020-過敏性腸症候群（IBS） 改訂第2版 日本消化器病学会 (編) 二〇二〇年<br>
            </li>
            <li> Brian E. Lacy, et al. Bowel Disorders. Gastroenterology 2016;150:1393-1407. ROME FOUNDATION.
              <a href="https://theromefoundation.org/wp-content/uploads/bowel-disorders.pdf" target="_blank">
                https://theromefoundation.org/wp-content/uploads/bowel-disorders.pdf
                <AtomsOpenInNew />,
              </a> （参照: 20240410）.

            </li>
          </ul>
        </section>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  padding: 0px 40px 40px 40px;
  flex-direction: column;
  background: $secondary;
  position: relative;
  z-index: 3;

  &__content {
    display: flex;
    padding: 56px 40px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 32px 0px;
    flex-direction: column;
    background: $white;

    .images {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 60px;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        span {
          text-align: center;
          font-weight: 900;
          line-height: 1.4;
          letter-spacing: .03em;
        }

        &--main {
          @extend .images__item;

          span {
            font-size: 20px;
          }
        }
      }
    }

    h1 {
      text-align: center;
      font-size: 40px;
      line-height: 1.5;
      font-weight: 900;
    }

    p {
      text-align: center;
      font-weight: 700;
    }
  }
}

.fucyo {
  display: flex;
  margin: -80px 0 0 0;
  padding: 160px 40px 80px;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background: $gray;
  position: relative;
  z-index: 2;

  &__content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    padding: 60px;
    align-items: center;
    gap: 60px;
    border-radius: 16px;
    background: $white;

    @media screen and (max-width: $screen-sm) {
      gap: 24px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      h2 {
        font-size: 32px;
      }

      p {
        margin: 0 0 8px 0;
      }
    }
  }



  img {
    width: 360px;

    @media screen and (max-width: $screen-sm) {
      width: 40%;
    }
  }
}

.hint {
  display: flex;
  margin: -80px 0 0 0;
  padding: 160px 40px 80px;
  flex-direction: column;
  align-items: center;
  background: $secondary;
  position: relative;
  z-index: 1;

  &__content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      h2 {
        font-size: 32px;
      }

      p {
        text-align: center;
      }
    }

    .hint-item {
      display: flex;
      width: 100%;
      padding: 60px;
      align-items: center;
      gap: 60px;
      border-radius: 16px;
      background: $white;

      @media screen and (max-width: $screen-sm) {
        gap: 24px;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        h3 {
          font-size: 24px;
        }

        p {
          margin: 0 0 8px 0;
        }
      }

      img {
        width: 360px;

        @media screen and (max-width: $screen-sm) {
          width: 40%;
        }
      }

      &--reverse {
        @extend .hint-item;
        flex-direction: row-reverse;
      }
    }
  }
}

.about {
  display: flex;
  margin: -80px 0 0 0;
  padding: 160px 40px 80px;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  background: $gray;

  &__content {
    width: 100%;
    max-width: 688px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      h2 {
        font-size: 24px;
        line-height: 1;
      }

      p {
        text-align: center;
      }
    }

    .references {
      display: flex;
      padding: 40px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 16px;
      border: 1px solid $bark-blue38;
      background: $white87;
      color: $bark-blue54;

      h2 {
        font-size: 14px;
        line-height: 1;
      }

      ul li {
        font-size: 10px;
        list-style-type: disc;
        margin: 0 0 0 1em;

        a {
          font-size: 10px;
          color: $link;
          font-weight: 500;

          svg {
            margin: 0 0 -4px;
          }
        }
      }
    }
  }
}
</style>