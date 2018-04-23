<template>
  <Panel title="有车有钱" :class="$style.panel">
    <section :class="$style.carContent">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t19240/256/1797533931/20714/33347659/5ad95c30N97d8f50b.png?width=375&height=233" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
    </section>
    <ul :class="$style.list">
      <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
          <h4>旅游</h4>
      </li>
      <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="">
          <h4>医美</h4>
      </li>
      <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88" alt="">
          <h4>房抵贷</h4>
      </li>
      <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90" alt="">
          <h4>驾校</h4>
      </li>
      <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88" alt="">
          <h4>分期付</h4>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module >
  @import "../../css/element.scss";
  .panel{
    @include panel;
    .carContent {
      @include list(row);
      width: 100%;
      padding-bottom: 40px;
      justify-content: space-around;
      img{
        width: 50%;
      }
    }
    .list{
      @include list(row);
      background: #fff;
      padding: 40px 10px 20px;
      justify-content: space-around;
      .item{
        text-align: center;
        img{
          width: 90px;
          height: 90px;
        }
        h4{
          padding-top: 12px;
          font-size: 26px;
          color: #666;
        }
      }
    }
  }
</style>

