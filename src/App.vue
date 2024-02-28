<script>
  export default{}
</script>

<template>
  <div class="page-wrapp">
    <Header/>
    <main class="page-sections">
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
    </main>
    <Footer/>
  </div>
</template>

<style>
  .page-wrapp{
    display: flex;
    flex-direction: column;
  }
  .page-sections{
    display: flex;
    flex-direction: column;
    gap: 200px;
    overflow-x: clip;
  }
  @media screen and (max-width: 550px){
    .page-sections{
      gap: 160px;
    }
  }
  @media screen and (max-width: 425px){
    .page-sections{
      gap: 120px;
    }
  }
</style>