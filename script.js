let noteContainer = document.querySelector('.all-note-container');
let addNoteBtn = document.querySelector('#add-note-btn');
let inputBox = document.querySelector('#note-input');
let errorMessage = document.querySelector('.error-message');


window.onload=()=>{
    if(localStorage.getItem('note')){
        noteContainer.innerHTML = localStorage.getItem('note');
    }
    
};

function updateStorage(){
    localStorage.setItem('note',noteContainer.innerHTML);
};

function addNotes(){
    let inputValue = inputBox.value;

    if(inputValue !== ''){

        let divContainer = document.createElement('div');
        divContainer.classList.add('notes-container');
        

        let note = document.createElement('div');
        note.classList.add('note');
        

        let deleteDiv = document.createElement('div');
        deleteDiv.classList.add('delete-btn');
        

        let containNote = document.createElement('p');
        containNote.textContent = inputValue;
        containNote.classList.add('input-box');
        containNote.setAttribute('contenteditable','true');
        

         // Assemble the elements
         note.appendChild(containNote);
         deleteDiv.innerHTML = '<i class="ri-delete-bin-2-line"></i>'; 
         divContainer.appendChild(note);
         divContainer.appendChild(deleteDiv);
         noteContainer.appendChild(divContainer); // 

        errorMessage.style.display = 'none';
        
    }else{
        errorMessage.style.display = 'block';
    }
    inputBox.value = '';
}

addNoteBtn.addEventListener('click', ()=>{
    addNotes();
    updateStorage();
});

inputBox.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        addNotes();
        updateStorage();
    }
});

noteContainer.addEventListener('click',(el)=>{
    if(el.target.tagName === ('I')){
        el.target.parentElement.parentElement.remove();
         updateStorage();
    }
});

noteContainer.addEventListener('input', () => {
    updateStorage();
});




