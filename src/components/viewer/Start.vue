<template>
  <div class="start-page-wrapper">
    <div class="card">
      <div class="title">
        <h1>To start search just use</h1>
        <div class="d-flex">
          <span class="green">Product ASIN</span>
          <span class="or">-OR-</span>
          <span class="green">Source URL</span>
        </div>
      </div>
      <div class="big-empty-image">
        <svg xmlns="http://www.w3.org/2000/svg" width="319" height="112" viewBox="0 0 319 112">
          <g fill="none" fill-rule="evenodd">
            <path
              stroke="#525F7F"
              stroke-dasharray="5"
              d="M318 85.552c-29.398 18.61-55.398 27.916-78 27.916-45 0-144.094-32.7-135-12 9.094 20.7 97-34-7-39C59.732 60.628 27.065 39.805 0 0"
              transform="translate(1 -2.468)"
            />
            <path stroke="#546181" d="M0 17.468L2 3.468 18 7.468z" transform="translate(1 -2.468)" />
          </g>
        </svg>
        <img src="/assets/img/bitmap.jpg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start-page-wrapper {
  .card {
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 50px;

      h1 {
        font-size: 25px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: center;
        color: #92a0b1;
      }

      span.or {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        color: #92a0b1;
        margin: 0 15px;
        display: inline-block;
      }

      span.green {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.44px;
        color: #21d196;
        text-transform: uppercase;
      }
    }

    .big-empty-image {
      position: relative;
      svg {
        position: absolute;
        top: -115px;
        left: -60px;
      }

      img {
      }
    }
  }
}
</style>