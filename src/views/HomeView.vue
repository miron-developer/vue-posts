<script></script>

<template>
  <main>
    <div class="tutorial">
      <div class="create-post tutorial-item">
        <h2>Create post tutorial</h2>

        <div class="step">
          <p>step 1: click the button on top-right</p>

          <div class="img">
            <img src="/img/create-1-step.png" alt="create-1" />
          </div>
        </div>

        <div class="step">
          <p>step 2: fill these input fields and click "Save"</p>

          <div class="img">
            <img src="/img/create-2-step.png" alt="create-2" />
          </div>
        </div>
      </div>

      <div class="edit-post tutorial-item">
        <h2>Edit post tutorial</h2>

        <div class="step">
          <p>step 1: click the button on top-right of the post</p>

          <div class="img">
            <img src="/img/edit-1-step.png" alt="edit-1" />
          </div>
        </div>

        <div class="step">
          <p>step 2: change what you want and click "Save"</p>

          <div class="img">
            <img src="/img/edit-2-step.png" alt="edit-2" />
          </div>
        </div>
      </div>

      <div class="remove-post tutorial-item">
        <h2>Remove post tutorial</h2>

        <div class="step">
          <p>
            step 1: click the button on top-right of the post.
            <i> (be carefull, this is not returning action)</i>
          </p>

          <div class="img">
            <img src="/img/remove-1-step.png" alt="remove-1" />
          </div>
        </div>

        <div class="step">
          <p>step 2: Done!)</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

main {
  padding: 50px;

  .tutorial .tutorial-item {
    margin-bottom: 20px;
    padding: 20px;
    background: $header-bg;

    h2 {
      margin-bottom: 20px;
      text-align: center;
    }

    .step {
      margin-bottom: 10px;

      p {
        margin-bottom: 10px;
        color: #0006ff;
        text-shadow: 0 0 6px #000000;
      }

      .img {
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 20px;
        background: black;
      }
    }
  }
}
</style>
