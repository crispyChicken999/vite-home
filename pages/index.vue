<template>
  <div class="home">
    <Tree></Tree>
    <div class="content-wrapper">
      <div class="content">
        <h1>欢迎来到我的主页</h1>
        <p>
          <a
            href="http://github.com/crispychcken999"
            target="_blank"
            rel="noopener noreferrer"
            >Github地址</a
          >
        </p>
        <p>点击下列按钮跳转体验</p>
        <div class="btn-group">
          <button @click="goToProject('/vite-threejs/')">
            ThreeJS Playgroud
          </button>
          <button @click="goToProject('/Simple-2048/')">Simple-2048</button>
          <button @click="goToProject">TODO</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "欢迎来到我的主页",
  meta: [
    {
      name: "keywords",
      content: "个人主页,前端,JavaScript,Vue,ThreeJS,2048",
    },
    {
      name: "description",
      content: "这是我的个人主页，欢迎来逛逛",
    },
  ],
});
const baseURL = "https://crispyChicken.github.io";
// 跳转至项目
const goToProject = (name) => {
  if (!name) return;
  window.location.href = baseURL + name;
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  .content-wrapper {
    z-index: 999;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    animation: gradient 5s ease infinite;
    background: linear-gradient(to right, #17ead845, #6077ea45);
    background-size: 400% 400%;
    .content {
      padding: 20px 50px;
      min-width: 700px;
      min-height: 375px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      align-items: center;
      border-radius: 20px;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.396);
      border: 0px rgba(255, 255, 255, 0.4) solid;
      border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
      border-right: 0px rgba(40, 40, 40, 0.35) solid;
      background-image: url("~/assets/svg/cool-background.svg");
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      background-size: cover;
      h1 {
        font-size: 4rem;
        color: #0095ff;
        // mix-blend-mode: difference;
        text-shadow: 2px 2px 0px #5c5c5c;
      }
      p {
        font-size: 2rem;
        margin-bottom: 1rem;
        &:last-of-type {
          color: #999;
        mix-blend-mode: difference;
        }
      }
      a {
        color: #faeb19;
        text-decoration: none;
        transition: all 0.5s;
        mix-blend-mode: difference;
        text-shadow: 2px 2px 0px #5c5c5c;
        &:hover {
          color: #00ff62;
          text-shadow: 2px 2px 0px #c3c3c3;
        }
      }
      .btn-group {
        display: flex;
        gap: 18px;
        button {
          border: none;
          color: white;
          cursor: pointer;
          font-size: 2rem;
          border-radius: 5px;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          background-color: rgb(25, 138, 250);
          &:hover {
            transform: translate(15px, -15px);
            box-shadow: rgba(52, 52, 52, 0.4) -5px 5px,
              rgba(52, 52, 52, 0.3) -10px 10px, rgba(52, 52, 52, 0.2) -15px 15px,
              rgba(52, 52, 52, 0.1) -20px 20px,
              rgba(52, 52, 52, 0.05) -25px 25px;
          }
        }
      }
    }
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
