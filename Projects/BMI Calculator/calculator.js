const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid Height (${height})`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid Weight (${weight})`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        let bmiCategory

        if(bmi < 18.5){
            bmiCategory = 'underweight'
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            bmiCategory = 'Normal Weight'
        }
        else if (bmi >=24.9 && bmi < 24.9){
            bmiCategory = 'Over-Weight'
        }
        else{
            bmiCategory = 'Obese'
        }

        // Show BMI result
        result.innerHTML = `<span>${bmi} (${bmiCategory})</span>`;
    }

});
