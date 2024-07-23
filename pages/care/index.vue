<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="text">
          <h2>
            こころの<br class="is-sp">ケアをする
          </h2>

          <img src="@/assets/images/care.webp" width="360" class="is-sp">

          <p>
            おなかの不調がこころの健康にも影響することを体験したことから、「こころのケア」を普段の生活に取り入れました。まずは病院に行き、適切な処置とアドバイスを受けました。<br><br>

            どうしてもおなかの調子が悪い時は無理をしないこと、ただし、おなかの調子を気にして外出することを諦めずに薬に頼っても良いこと。<br><br>

            そして、わたしなりの実用的なヒントを活用して外出先での食事を楽しんでいます。
          </p>
        </div>

        <img src="@/assets/images/care.webp" width="360" class="is-pc">
      </div>
    </section>

    <section class="hint">
      <div class="hint__content">
        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント①</h4>
            <h3>
              深呼吸
            </h3>
          </div>


          <img src="@/assets/images/care/1.webp" width="360">

          <p>
            外出時に動悸や呼吸困難などの症状が出そうだなと感じたら、まずは深呼吸をします。<br><br>

            吸う時間より、吐く時間の方が長くなるようして、おなかに手を添えることで呼吸にフォーカスすることを心がけます。<br><br>

            それでも症状が出そうな場合は、人がいない場所に移動してからだもこころも一旦落ち着くまで行動を制限します。とにかく、無理をせず、呼吸を整えることが実用的なヒントです。



          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント②</h4>
            <h3>
              意識を変える
            </h3>
          </div>

          <img src="@/assets/images/care/2.webp" width="360">

          <p>
            深呼吸にフォーカスするだけでは、なかなか落ち着かない時があります。<br>
            そんな時は強制的に意識を変えることを心がけていました。<br><br>

            例えば、頭の中で数字を1から数えてみたり、簡単な足し算や引き算などの計算をしてみるなど、頭を使うことで意識を変えます。<br><br>

            パソコンやスマートフォンの画面を見ることで意識を変えることもできますが、電車や車に乗っている時は酔ってしまうこともあり、なるべく目をつぶって意識を変えることが実用的なヒントです。
          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント③</h4>
            <h3>
              自信をつける
            </h3>
          </div>

          <img src="@/assets/images/care/3.webp" width="360">

          <p>
            外出したり、外出先で食事ができたり、今まで困難だったことがひとつでもできたら、徹底的に自分を褒めてあげます。<br><br>

            自分に自信を持つのはなかなか難しいと感じていたわたしは、友人に「電車に乗れたよ」「今日は外出先で食事をしているよ」と連絡をして意識的に「褒めて」もらっていました。<br><br>
            SNSを活用して、できたことをリストアップしても良いかもしれません。

            自分が克服したことを、大げさに褒めてあげることを意識することで自信につながり、外出することを諦めなくなっていきました。
          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント④</h4>
            <h3>
              不安を減らす
            </h3>
          </div>

          <img src="@/assets/images/care/4.webp" width="360">

          <p>
            外出する時に思うのは、「おなかが痛くなったらどうしよう？」「トイレがなかったらどうしよう？」と楽しみよりも不安が先にきていました。<br><br>

            わたしは、スマートフォンにトイレマップを入れて事前に外出先近辺のトイレの位置を把握し、目的地に着いたらまずはトイレの確認をしていました。<br><br>

            事前に調査し、不安を減らすことで、外出のハードルを少しずつ下げていくことが実用的なヒントです。
          </p>
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

        @media screen and (max-width: $screen-sm) {
          text-align: center;
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
}

.hint {
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
    flex-wrap: wrap;
    gap: 40px;

    .hint--item {
      display: flex;
      width: calc((100% - 40px) / 2);
      padding: 60px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 16px;
      background: $white;

      @media screen and (max-width: $screen-sm) {
        width: 100%;
        padding: 40px 24px;
      }

      .title {
        font-weight: 900;
        margin: 0 0 24px;

        h3 {
          font-size: 24px;
        }

        h4 {
          font-size: 16px;
          line-height: 1.5;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>