<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="images">
          <div class="images__item">
            <p>
              おなかが張っている
            </p>
            <img src="@/assets/images/hari.png" width="160">
          </div>
          <div class="images__item--main">
            <p>
              食事をすると下痢をする
            </p>
            <img src="@/assets/images/geri.png" width="200">
          </div>
          <div class="images__item">
            <p>
              おなかがゴロゴロしてる
            </p>
            <img src="@/assets/images/gorogoro.png" width="160">
          </div>
        </div>

        <div class="title">
          <h1>
            おなかの不調、<br>
            きちんと向き合っていますか？
          </h1>
          <p>
            みんなと同じ食事をしているのに自分だけおなかの調子がよくない。<br>
            食物アレルギーの検査をしても問題ない。おなかの不調が気になって、せっかくの食事を楽しめない。 <br><br>

            このページに訪れたあなたも、もしかするとおなかの不調に悩んでいるのかもしれません。<br>
            おなかの不調を見逃さず、まずは自分のからだを見つめ直してみませんか？
          </p>
        </div>
      </div>
    </section>

    <section>
      <AtomsButton />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  height: 720px;
  padding: 0px 40px 40px 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: $secondary;

  &__content {
    display: flex;
    padding: 24px 0px;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 32px 0px;
    flex: 1 0 0;
    align-self: stretch;
    flex-wrap: wrap;
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

        p {
          text-align: center;
          font-weight: 900;
          line-height: 1;
          letter-spacing: .03em;
        }

        &--main {
          @extend .images__item;

          p {
            font-size: 20px;
          }
        }
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      h1 {
        text-align: center;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.5;
        letter-spacing: .03em;
      }

      p {
        text-align: center;
        font-weight: 700;
        line-height: 1.7;
      }
    }
  }
}
</style>