        document.querySelector('#push').onclick = 
        function()
        {
            if(document.querySelector('#newtask input').
            value.length == 0)
            {
                alert("Please Enter a Task");
            }
            else
            {
                document.querySelector('#tasks').innerHTML 
                +=`<div class="task">
                    <span id="taskname">
                    ${document.querySelector("#newtask input").
                    value}
                    </span>
                    <button class='delete'>Delete</button>
                    </div>`;

                    var current_task = document.
                    querySelectorAll('.delete');

                    for(var i=0; i<current_task.length; i++)
                    {
                        current_task[i].onclick = function(){
                            this.parentNode.remove();
                        }
                    }

                    var tasks = document.
                    querySelectorAll('#taskname');

                    for(var i=0; i<tasks.length; i++)
                    {
                        tasks[i].onclick = function(){
                            this.classList.toggle('completed');
                        }
                    }

                    document.querySelector('#newtask input').
                    value = "";
            }
        }