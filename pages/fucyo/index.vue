<script setup lang="ts">
useHead({
  title: 'おなかの不調？ - おなかの不調と向き合うわたしの実用ヒント',
})
</script>

<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="text">
          <h2>
            おなかの不調？
          </h2>

          <img src="@/assets/images/fucyo.webp" width="360" class="is-sp">

          <p>
            私は元々おなかの調子が悪く、下痢や便秘を交互に繰り返していました。症状は悪化し、からだだけでなく、こころまでも壊してしまい、食事を楽しむことはもちろん、外出することも大変な日々を過ごしていました。<br><br>

            このページでは、私が体験したおなかの不調とこころの不調についてお話します。
          </p>
        </div>

        <img src="@/assets/images/fucyo.webp" width="360" class="is-pc">
      </div>
    </section>

    <section class="fucyo">
      <div class="fucyo__content">
        <section class="fucyo-item">
          <div class="text">
            <h3>
              不調の悪化
            </h3>

            <img src="@/assets/images/fucyo/onaka.webp" width="360" class="is-sp">

            <p>
              ある日、外食後に電車で家に帰る途中、突然の下痢に襲われました。何度も電車を降りてトイレに駆け込み、貧血のような症状もありました。それから下痢は10日以上も続き、何を食べてもすぐに排出してしまうので病院へ行きました。<br><br>

              しかし、病院の検査では異常なし。食物アレルギーの検査をおこなっても異常なし。これは困ったなと思い、食べ物について見直す日々が始まりました。調べていくと、アレルギー疾患はないのに下痢や便秘を繰り返す「過敏性腸症候群」に辿り着きました。<br><br>

              過敏性腸症候群になったことをきっかけに、まずは自分に合う食べ物について知ることからはじめました。
            </p>
          </div>

          <img src="@/assets/images/fucyo/onaka.webp" width="360" class="is-pc">
        </section>

        <section class="fucyo-item--reverse">
          <div class="text">
            <h3>
              さらなるからだと<br class="is-sp">こころの不調
            </h3>

            <img src="@/assets/images/fucyo/kokoro.webp" width="360" class="is-sp">

            <p>
              おなかの不調や過去のトラウマから、突然電車に乗ると手足が痺れ、呼吸が浅くなり、貧血のような症状が出るようになりました。<br><br>

              結果、病院に行くと、身体に疾患はないのに動悸や呼吸困難などの症状が出る「パニック障害」と呼ばれる病気でした。<br><br>

              おなかの不調から、脳や身体全体に襲いかかる病にとても怖くなったのを覚えています。<br><br>

              おなかの不調がこころの健康にも影響することを体験したことから、「こころのケア」を普段の生活に取り入れました。
            </p>
          </div>

          <img src="@/assets/images/fucyo/kokoro.webp" width="360" class="is-pc">
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
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: $screen-sm) {
    padding: 0px 16px 40px 16px;
  }

  &__content {
    display: flex;
    width: 100%;
    max-width: 1000px;
    padding: 60px;
    align-items: center;
    gap: 60px;
    border-radius: 16px;
    background: $white;

    @media screen and (max-width: $screen-sm) {
      padding: 56px 24px 0;
      gap: 24px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      font-weight: 700;

      @media screen and (max-width: $screen-sm) {
        align-items: center;
      }

      h2 {
        font-size: 32px;
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
}

.fucyo {
  display: flex;
  padding: 80px 40px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: $gray;

  @media screen and (max-width: $screen-sm) {
    padding: 40px 16px;
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

    .fucyo-item {
      display: flex;
      width: 100%;
      padding: 60px;
      align-items: center;
      gap: 60px;
      border-radius: 16px;
      background: $white;

      @media screen and (max-width: $screen-sm) {
        padding: 40px 24px;
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
          text-align: left;
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
        @extend .fucyo-item;
        flex-direction: row-reverse;

        .text {
          h3 {
            @media screen and (max-width: $screen-sm) {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>