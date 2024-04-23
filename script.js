const state = {
    taskList : [],
}

const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

const htmlTaskContent = ({id, title, description, type, url}) => `
    <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class='card shadow-sm task__card'>
            <div class='card-header gap-2 d-flex justify-content-end task__card__header'>
            <button type='button' class='btn btn-outline-info mr-2' name=${id}>
                <i class='fas fa-pencil-alt' name=${id}></i>
            </button>
            <button type='button' class='btn btn-outline-danger mr-2' name=${id}>
                <i class='fas fa-trash-alt' name=${id}></i>
            </button>
            </div>
            <div class='card-body'>
                ${
                    url && `<img width='100%' src=${url} alt='card image cap' class='card-image-top md-3 rounded-lg'>`
                }
                <h4 class='task__card__title'>${title}</h4>
                <p class='description trim-3-lines text-muted' data-gram_editor='false'>
                    ${description}
                </p>
                <div class='type text-white d-flex flex-wrap'>
                    <span class='badge bg-primary m-1'>${type}</span>
                </div>
            </div>
            <div class='card-footer'>
                <button 
                    type='button' 
                    class='btn btn-outline-primary float-right' 
                    data-bs-toggle='modal'
                    data-bs-target='#showTask'
                    id=${id}
                >
            </button>
            </div>
        </div>    
    </div>
`;