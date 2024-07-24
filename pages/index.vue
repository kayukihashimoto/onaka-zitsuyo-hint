<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="images">
          <div class="images__item">
            <span class="is-pc">
              おなかが<br class="is-md">張っている
            </span>
            <img src="@/assets/images/hari.webp"
              srcset="@/assets/images/hari-160.webp 80w, @/assets/images/hari-240.webp 120w, @/assets/images/hari.webp 160w"
              sizes="(max-width: 576px) 80px, (max-width: 768px) 120px, 160px">
          </div>
          <div class="images__item--main">
            <span class="is-pc">
              食事をすると<br class="is-md">下痢をする
            </span>
            <img src="@/assets/images/geri.webp"
              srcset="@/assets/images/geri-200.webp 100w, @/assets/images/geri-320.webp 160w, @/assets/images/geri.webp 400w"
              sizes="(max-width: 576px) 100px, (max-width: 768px) 160px, 200px">
          </div>
          <div class="images__item">
            <span class="is-pc">
              おなかが<br class="is-md">ゴロゴロしてる
            </span>
            <img src="@/assets/images/gorogoro.webp"
              srcset="@/assets/images/gorogoro-160.webp 80w, @/assets/images/gorogoro-240.webp 120w, @/assets/images/gorogoro.webp 160w"
              sizes="(max-width: 576px) 80px, (max-width: 768px) 120px, 160px">
          </div>
        </div>

        <h1>
          おなかの不調と向き合う<br>わたしの実用ヒント
        </h1>

        <div class="is-sp">
          <p>
            みんなと同じ食事をしているのに<br>
            自分だけおなかの調子がよくない。<br>
            おなかの不調が気になって、<br>
            せっかくの食事を楽しめない。
          </p>
          <p>
            そんなおなかとこころの不調に<br>
            悩まされてきた私が、<br>
            具体的な克服方法や<br>
            工夫した実用的なヒントを紹介します。
          </p>
        </div>

        <div class="is-pc">
          <p>
            みんなと同じ食事をしているのに自分だけおなかの調子がよくない。<br>
            おなかの不調が気になって、せっかくの食事を楽しめない。
          </p>
          <p>
            そんなおなかとこころの不調に悩まされてきた私が、<br>
            具体的な克服方法や工夫した実用的なヒントを紹介します。
          </p>
        </div>
      </div>
    </section>

    <section id="fucyo" class="fucyo">
      <div class="fucyo__content">
        <div class="text">
          <h2>
            おなかの不調？
          </h2>

          <img src="@/assets/images/fucyo.webp" width="360" class="is-sp">

          <p>
            私は元々おなかの調子が悪く、下痢や便秘を交互に繰り返していました。症状は悪化し、からだだけでなく、こころまでも壊してしまい、食事を楽しむことはもちろん、外出することも大変な日々を過ごしていました。このページでは、私が体験したおなかの不調とこころの不調についてお話します。
          </p>

          <AtomsButton to="/fucyo" />
        </div>

        <img src="@/assets/images/fucyo.webp" width="360" class="is-pc">
      </div>
    </section>

    <section id="hint" class="hint">
      <div class="hint__content">
        <div class="title">
          <h2>
            不調と向き合う<br class="is-sp">わたしの実用ヒント
          </h2>

          <p>
            長らくおなかとこころの不調に<br class="is-sp">悩まされていましたが、<br>
            今は薬の治療を受けながら、<br class="is-sp">外出や食事も楽しめるようになりました。<br><br>

            ここからは、私なりに問題に対処した<br class="is-sp">具体的な克服方法や<br>
            工夫した実用的なヒントを紹介します。
          </p>
        </div>

        <section class="hint-item">
          <div class="text">
            <h3>
              自分に合う食べ物を知る
            </h3>

            <img src="@/assets/images/food.webp" width="360" class="is-sp">

            <p>
              おなかの不調をきっかけに、自分に合う食べ物を見つけるために食事記録をはじめました。毎日の食べ物とおなかの調子を記録しながら、自分に合う・合わない食べ物を見つける実用的なヒントを紹介します。
            </p>

            <AtomsButton to="/food" label="実用ヒントをくわしく見る" />
          </div>

          <img src="@/assets/images/food.webp" width="360" class="is-pc">
        </section>

        <section class="hint-item--reverse">
          <div class="text">
            <h3>
              こころのケアをする
            </h3>

            <img src="@/assets/images/care.webp" width="360" class="is-sp">

            <p>
              おなかの不調がこころの健康にも影響することを体験し、「こころのケア」を生活に取り入れました。適切な医療処置とアドバイスを受け、無理をしないことや薬を活用することで、外出先での食事を楽しむ方法を紹介します。
            </p>

            <AtomsButton to="/care" label="実用ヒントをくわしく見る" />
          </div>

          <img src="@/assets/images/care.webp" width="360" class="is-pc">
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
            本ウェブサイトの情報は個人的な情報提供を目的としており、<br class="is-pc">
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

  @media screen and (max-width: $screen-sm) {
    padding: 0px 16px 40px 16px;
  }

  &__content {
    display: flex;
    padding: 56px 40px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 32px 0px;
    flex-direction: column;
    border-radius: 16px;
    background: $white;

    @media screen and (max-width: $screen-sm) {
      padding: 40px 16px 56px;
      gap: 24px 0px;
    }

    .images {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 60px;

      @media screen and (max-width: $screen-md) {
        gap: 32px;
      }

      @media screen and (max-width: $screen-sm) {
        gap: 16px;
      }

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

        img {
          width: 160px;

          @media screen and (max-width: $screen-md) {
            width: 120px;
          }

          @media screen and (max-width: $screen-sm) {
            width: 80px;
          }
        }

        &--main {
          @extend .images__item;

          span {
            font-size: 20px;
          }

          img {
            width: 200px;

            @media screen and (max-width: $screen-md) {
              width: 160px;
            }

            @media screen and (max-width: $screen-sm) {
              width: 100px;
            }
          }
        }
      }
    }

    h1 {
      text-align: center;
      font-size: 40px;
      line-height: 1.5;
      font-weight: 900;

      @media screen and (max-width: $screen-sm) {
        font-size: 28px;
      }
    }

    p {
      text-align: center;
      font-weight: 700;
      margin: 0 0 24px;

      &:last-child {
        margin: 0;
      }
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

  @media screen and (max-width: $screen-sm) {
    margin: -64px 0 0 0;
    padding: 104px 16px 40px;
  }

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
      padding: 60px 24px;
      gap: 24px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      @media screen and (max-width: $screen-sm) {
        align-items: center;
      }

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

    @media screen and (max-width: $screen-md) {
      width: 40%;
    }

    @media screen and (max-width: $screen-sm) {
      width: 100%;
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

  @media screen and (max-width: $screen-sm) {
    margin: -64px 0 0 0;
    padding: 104px 16px 40px;
  }

  &__content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media screen and (max-width: $screen-sm) {
      gap: 40px;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      h2 {
        font-size: 32px;
        text-align: center;
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
        justify-content: center;
        padding: 60px 24px;
        gap: 24px;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        @media screen and (max-width: $screen-sm) {
          align-items: center;
        }

        h3 {
          font-size: 24px;
        }

        p {
          margin: 0 0 8px 0;
        }
      }

      img {
        width: 360px;

        @media screen and (max-width: $screen-md) {
          width: 40%;
        }

        @media screen and (max-width: $screen-sm) {
          width: 100%;
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
  background: $gray;

  @media screen and (max-width: $screen-sm) {
    margin: -64px 0 0 0;
    padding: 104px 16px 40px;
  }

  &__content {
    width: 100%;
    max-width: 688px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;

    @media screen and (max-width: $screen-sm) {
      gap: 40px;
    }

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

        @media screen and (max-width: $screen-sm) {
          text-align: left;
        }
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

      @media screen and (max-width: $screen-sm) {
        padding: 40px 16px;
      }

      h2 {
        font-size: 14px;
        line-height: 1;
      }

      ul li {
        font-size: 10px;
        list-style-type: disc;
        margin: 0 0 0 1.5em;

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