document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pib = document.getElementById('pib');
    const variant = document.getElementById('variant');
    const phone = document.getElementById('phone');
    const faculty = document.getElementById('faculty');
    const address = document.getElementById('address');

    const output = document.getElementById('outputContent');
    output.innerHTML = "";

    const pibRegex = /^[А-ЯІЇЄа-яіїє]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
    const variantRegex = /^(?:[1-9]|[1-9][0-9])$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const facultyRegex = /^[А-ЯІЇЄ]{4}$/;
    const addressRegex = /^м\.\s[А-ЯІЇЄа-яіїє]+$/;

    let isValid = true;

    
    [pib, variant, phone, faculty, address].forEach(field => {
        field.classList.remove('error', 'success');
    });

   
    function addOutput(label, value, valid) {
        const p = document.createElement('p');
        p.innerHTML = `${label}: ${value}`;
        p.classList.add(valid ? "text-success" : "text-error");
        output.appendChild(p);
    }

 
    const checks = [
        {field: pib, regex: pibRegex, label: "ПІБ"},
        {field: variant, regex: variantRegex, label: "Варіант"},
        {field: phone, regex: phoneRegex, label: "Телефон"},
        {field: faculty, regex: facultyRegex, label: "Факультет"},
        {field: address, regex: addressRegex, label: "Адреса"}
    ];

    checks.forEach(item => {
        if (!item.regex.test(item.field.value)) {
            item.field.classList.add('error');
            addOutput(item.label, item.field.value, false);
            isValid = false;
        } else {
            item.field.classList.add('success');
            addOutput(item.label, item.field.value, true);
        }
    });
});
