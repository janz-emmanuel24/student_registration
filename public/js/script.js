const student_image = document.querySelector('#student_image')
const image_output = document.querySelector('#image_output');

student_image.addEventListener('change', (e) => {
    e.preventDefault()
    image_output.src = URL.createObjectURL(e.target.files[0])
})