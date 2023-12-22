<script>
  export let data;
  $: studentProgress = data.studentProgress;

  function getInitials(name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
</script>

<div>
  <h3 class="font-semibold text-2xl mb-4">
    Student {studentProgress[0].student.name} Progress
  </h3>
  <div>
    <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
      <figure class="mt-8">
        <div class="avatar placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-24">
            <span class="text-3xl"
              >{getInitials(studentProgress[0].student.name)}</span
            >
          </div>
        </div>
      </figure>

      <div class="card-body w-100">
        <h2 class="text-center text-2xl text-gray-800">
          {studentProgress[0].student.name}
        </h2>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    {#each studentProgress as { average_score_improvement, subject, homework_completion_rate, attendance_rate }}
      <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
        <div class="text-center mt-8">
          <p class="text-6xl text-pink-600 font-semibold">
            {average_score_improvement}
          </p>
          <p class="text-gray-800 mt-2">Average Score Improvement</p>
        </div>

        <div class="card-body w-100">
          <h2 class="text-center text-2xl text-gray-800 font-extrabold">
            {subject.name}
          </h2>
        </div>

        <div>
          <div class="flex items-center justify-around">
            <div class="text-center">
              <div
                class="radial-progress text-yellow-600"
                style="--value:{homework_completion_rate};"
                role="progressbar"
              >
                {homework_completion_rate}%
              </div>
              <p class="text-gray-800 mt-4">Homework Completion</p>
            </div>
            <div class="text-center">
              <div
                class="radial-progress text-blue-600"
                style="--value:{attendance_rate};"
                role="progressbar"
              >
                {attendance_rate}%
              </div>
              <p class="text-gray-800 mt-4">Attendance Rate</p>
            </div>
          </div>
          <progress
            class="progress progress-warning w-96"
            value="0"
            max={homework_completion_rate}
          ></progress>
        </div>
      </div>
    {/each}
  </div>
</div>
