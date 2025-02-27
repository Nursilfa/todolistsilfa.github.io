document.addEventListener ("DomContentLoaded", function () {
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");
    const addButton=document.getElementById("addTaskButton");

    //fungsi untuk menambahkan tugas
    function addTask (){
        const taskText=taskInput.value.trim();
        if (taskText == "") return;

        //Membuat elemen list baru dengan Boostrap styling
        const listItem =document.createElement("li");
        listItem.className="list-group-item d-flex justify-content-between align-items-center";

        //Membuat teks tugas
        const taskSpan=document.createElement("span");
        taskSpan.textContent=taskText;
        taskSpan.className="task-text";
        taskSpan.onclink=function(){
            this.classList.toggle("text-decoration-line-through");
        }

        //Membuat tombol hapus dengan bootstrap Styling
        const deleteButton=document.createElement("button");
        deleteButton.className="btn btn-danger btn-sm";
        deleteButton.textContent="Hapus";
        deleteButton.onclink=function(){
            listItem.remove();
        };
        
        //Menyusun elemen dalam list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        //Mengososngkan input setelah tugas ditambahkan 
        taskInput.value="";
    }

    //Event listener untuk tombol "Tambah"
    addButton.addEventListener("click", addTask);

    //Event listener untuk menambahkan tugas saat tekan enter
    taskInput.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            addTask ();
        }
    });
    });
