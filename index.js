exports.buildFrom = (jsonData, formRef) => {
	jsonData.fields.map(field => {
		let inputElement = document.createElement('input')
		Object.keys(field.attrs).map(attrName => {
			inputElement.setAttribute(attrName, field.attrs[attrName])
		})
		inputElement.setAttribute('type', field.type)
		if(formRef) formRef.appendChild(inputElement)
	})
}
