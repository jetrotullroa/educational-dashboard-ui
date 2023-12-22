<script>
  import moment from 'moment';
  export let data;
  $: interactions = data.interactions;

  function formatDate(date) {
    return moment(date).format('MMMM Do YYYY');
  }
</script>

<div>
  <h3 class="font-semibold text-2xl mb-4">Faculty Meetings</h3>
  <div class="grid grid-cols-2 gap-4">
    {#each interactions as { meeting_notes, last_meeting_date, coach, teacher }}
      <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
        <div class="card-body w-100">
          <h2 class="card-title text-gray-800">
            <div class="chat chat-start">
              <div class="chat-bubble">
                {meeting_notes}
              </div>
            </div>
          </h2>
          <p class="text-gray-800 mb-4">
            {formatDate(last_meeting_date)}
          </p>
          <p class="text-gray-800">
            <span class="font-semibold">Coach:</span>
            {coach.name}
          </p>
          <p class="text-gray-800">
            <span class="font-semibold">Teacher:</span>
            {teacher.name}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
