<script>
  export let data;
  $: resourceManagements = data.resourceManagements;

  function getTeacherNames(teachers) {
    return teachers.map((t) => t.name).join(', ');
  }
</script>

<div>
  <h3 class="font-semibold text-2xl mb-4">Resource Management</h3>
  <div class="grid grid-cols-2 gap-4">
    {#each resourceManagements as { name, utilization_rate, allocated_teachers }}
      <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
        <div class="text-center mt-8">
          <p class="text-6xl text-pink-600 font-semibold">{utilization_rate}</p>
          <p class="text-gray-800 mt-2">Utilization Rate</p>
        </div>

        <div class="card-body w-100">
          <h2 class="text-2xl text-gray-800 font-extrabold">
            {name}
          </h2>
          <p class="text-gray-800">
            <span class="font-semibold">Allocated Teachers:</span>
            {getTeacherNames(allocated_teachers)}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
