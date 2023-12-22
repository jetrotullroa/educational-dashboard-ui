<script>
  export let data;
  $: coaches = data.coaches;

  function getInitials(name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
</script>

<div>
  <h3 class="font-semibold text-2xl mb-4">Coaches</h3>
  <div class="grid grid-cols-2 gap-4">
    {#each coaches as { name, specialization, year_of_experience }}
      <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
        <figure class="mt-8">
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-24">
              <span class="text-3xl">{getInitials(name)}</span>
            </div>
          </div>
        </figure>

        <div class="card-body w-100">
          <h2 class="text-center text-2xl text-gray-800">
            {name}
          </h2>
          <p class="text-gray-800 mb-4"></p>
          <p class="text-gray-800">
            <span class="font-extrabold">Year of Experience: </span>
            {year_of_experience} years
          </p>
          <p class="text-gray-800">
            <span class="font-extrabold">Specialization:</span>
            {specialization}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
