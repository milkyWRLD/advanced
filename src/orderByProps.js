function orderByProps(obj, propsOrder) {
	const result = []

	for (const prop of propsOrder) {
		if (prop in obj) {
			result.push({ key: prop, value: obj[prop] })
		}
	}

	const restProps = Object.keys(obj)
		.filter(prop => !propsOrder.includes(prop))
		.sort()

	for (const prop of restProps) {
		result.push({ key: prop, value: obj[prop] })
	}

	return result
}

module.exports = orderByProps
