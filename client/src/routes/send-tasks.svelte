<script>
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
</script>

<style>
  .mainWrapper {
    display: flex;
    justify-content: center;
  }

  .send-tasks-div {
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .send-tasks-header {
    font-size: 3em;
    text-align: center;
  }

  .top-buttons-div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  .top-button {
    border: none;
    background-color: #003a8c;
    padding: 1em 2em;
    color: white;
    border-radius: 5px;
  }

  .tasks-div {
    padding-top: 1em;
  }

  .task-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
  }

  .task-text-div {
    display: flex;
    flex-direction: column;
  }
  .task-assignee {
    margin: 0;
  }

  .task-address {
  }

  .delete-icon {
    width: 32px;
    height: 32px;
  }
</style>

<main class="mainWrapper">
  <div class="send-tasks-div">
    <h1 class="send-tasks-header">Send Tasks</h1>
    <div class="top-buttons-div">
      <button class="top-button">Add Task</button>
      <button class="top-button" style="background-color:green;">Send All Tasks</button>
    </div>
    <div class="tasks-div">
      <div class="task-div">
        <div class="task-text-div">
          <h3 class="task-assignee">David Nogueira - +1 800 330 8090</h3>
          <strong class="task-address">123 Sesame St. Elmo's World, TX</strong>
        </div>
        <div class="delete-icon">
          <MdDelete />
        </div>
      </div>
      <div class="task-div">
        <div class="task-text-div">
          <h3 class="task-assignee">David Nogueira - +1 800 330 8090</h3>
          <strong class="task-address">123 Sesame St. Elmo's World, TX</strong>
        </div>
        <div class="delete-icon">
          <MdDelete />
        </div>
      </div>

      <div class="task-div">
        <div class="task-text-div">
          <h3 class="task-assignee">David Nogueira - +1 800 330 8090</h3>
          <strong class="task-address">123 Sesame St. Elmo's World, TX</strong>
        </div>
        <div class="delete-icon">
          <MdDelete />
        </div>
      </div>

      <div class="task-div">
        <div class="task-text-div">
          <h3 class="task-assignee">David Nogueira - +1 800 330 8090</h3>
          <strong class="task-address">123 Sesame St. Elmo's World, TX</strong>
        </div>
        <div class="delete-icon">
          <MdDelete />
        </div>
      </div>
    </div>
  </div>
</main>
