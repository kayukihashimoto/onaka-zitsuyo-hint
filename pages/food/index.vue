<script setup lang="ts">
useHead({
  title: '自分に合う食べ物を知る - おなかの不調と向き合うわたしの実用ヒント',
})
</script>

<template>
  <main>
    <section class="kv">
      <div class="kv__content">
        <div class="text">
          <h2>
            自分に合う<br class="is-sp is-md">食べ物を知る
          </h2>

          <img src="@/assets/images/food.webp" width="360" class="is-sp">

          <p>
            おなかの不調をきっかけに、まずは自分に合う食べ物について知ることからはじめました。<br><br>

            毎日、その日に食べたものとおなかの調子を記録し、何を食べるとおなかに影響が出るのかを少しずつ自分のからだと向き合いました。<br><br>

            自分に合う・合わない食べ物を知ることは、普段のおなかの調子を整えるのはもちろん、外出先での食事の選び方にも役立つわたしの実用的なヒントです。
          </p>
        </div>

        <img src="@/assets/images/food.webp" width="360" class="is-pc">
      </div>
    </section>

    <section class="hint">
      <div class="hint__content">
        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント①</h4>
            <h3>
              食事とおなかの記録
            </h3>
          </div>


          <img src="@/assets/images/hint/1.webp" width="360">

          <p>
            毎日、その日に食べたものとおなかの調子を記録します。<br><br>

            記録しておくことで、食材の買い物や外出先での食事の際に、自分に合う食べ物や料理を選びやすくなります。
          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント②</h4>
            <h3>
              自分に合う食べ物を知る
            </h3>
          </div>

          <img src="@/assets/images/hint/2.webp" width="360">

          <p>
            普段の食事とおなかの調子の記録から、自分に合わない食べ物がわかってきたところで、次はおなかを壊しにくい食べ物について調べました。<br><br>

            自分が好きな食べ物から挑戦し、少しずつ自分に合う食べ物を見つけていきました。
            さらに、外出先での食事の際には、食べたことのない食材は事前に調べる習慣をつけています。
          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント③</h4>
            <h3>
              無理に食べない
            </h3>
          </div>

          <img src="@/assets/images/hint/3.webp" width="360">

          <p>
            外出先で人と食事する際、どうしても自分には合わない食べ物が出ることがあります。<br><br>

            以前は遠慮して口にしていましたが、おなかのことを優先に考えて無理に食べないよう心がけるようにしました。<br><br>

            食事を一緒にする相手には「からだに合わない」ことをきちんと伝えることで、メニューを変更したり、お店にカスタマイズの依頼もしやすくなり、人と一緒に食事を楽しむことができるようになりました。
          </p>
        </section>

        <section class="hint--item">
          <div class="title">
            <h4>実用ヒント④</h4>
            <h3>
              さらなるからだとこころの不調
            </h3>
          </div>

          <img src="@/assets/images/hint/4.webp" width="360">

          <p>
            自分に合わない食べ物＝嫌いな食べ物、というわけではありません。<br>
            好みの料理におなかを壊しやすい食材が入っていて、外出先で食べられないことは多くあります。<br><br>

            しかし、自身の体験から、食べ物によっておなかの壊れ具合が異なります。少しおなかを壊す程度であれば、外出先での食事は避け、自宅で食べたいものを食べるようにしました。<br><br>

            好みの食べ物を我慢せず、食事を楽しむひとつの実用的なヒントです。
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