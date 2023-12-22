<script>
  import moment from 'moment';
  export let data;
  $: teacherActivities = data.teacherActivities;

  function formatDate(date) {
    return moment(date).format('MMMM Do YYYY');
  }

  function getInitials(name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  function getSubjects(subjects) {
    return subjects.map((s) => s.name).join(', ');
  }
</script>

<div>
  <div>
    <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
      <figure class="mt-8">
        <div class="avatar placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-24">
            <span class="text-3xl"
              >{getInitials(teacherActivities[0].teacher.name)}</span
            >
          </div>
        </div>
      </figure>

      <div class="card-body w-100">
        <h2 class="text-center text-2xl text-gray-800">
          {teacherActivities[0].teacher.name}
        </h2>
        <p class="text-gray-800 mb-4"></p>
        <p class="text-gray-800">
          <span class="font-extrabold">Year of Experience: </span>
          {teacherActivities[0].teacher.year_of_experience} years
        </p>
        <p class="text-gray-800">
          <span class="font-extrabold">Subjects:</span>
          {getSubjects(teacherActivities[0].teacher.subjects)}
        </p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4">
    {#each teacherActivities as { last_active, activity_score, student_interaction_rating }}
      <div class="card bg-teal-400 shadow-xl col-span-1 mb-4">
        <div class="text-center mt-8 flex items-center justify-around">
          <div>
            <p class="text-6xl text-pink-600 font-semibold">
              {activity_score}
            </p>
            <p class="text-gray-800 mt-2">Activity Score</p>
          </div>
          <div>
            <p class="text-6xl text-pink-600 font-semibold">
              {student_interaction_rating}
            </p>
            <p class="text-gray-800 mt-2">Student Interaction Rating</p>
          </div>
        </div>

        <div class="card-body w-100">
          <h2 class="text-center text-gray-800">
            <h2 class="text-xl font-extrabold">{formatDate(last_active)}</h2>
            <p class="text-gray-800 mt-2 text-center font-semibold">
              Last Active
            </p>
          </h2>
        </div>
      </div>
    {/each}
  </div>
</div>
