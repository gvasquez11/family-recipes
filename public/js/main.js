const deleteButton = document.querySelectorAll('.fa-trash')
// const updateButton = document.querySelectorAll('.fa-pen-to-square')

Array.from(deleteButton).forEach(item => {
    item.addEventListener('click', deleteRecipe)
})


async function deleteRecipe(){

    const recipeID = this.parentNode.parentNode.parentNode.dataset.id
    console.log(recipeID)
    try{
        const response = await fetch('familyRec/deleteRecipe',{
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'recipeIDFromJSFile' : recipeID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }

}
