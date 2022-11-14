<script>
  const tit = '목록'
  const fruits = ['사과', '딸기', '망고', '체리']
</script>

<h2>{tit}</h2>
<ul>
  {#each fruits as fruit, i}
    <li>{i + 1} - {fruit}</li>
  {/each}
</ul>