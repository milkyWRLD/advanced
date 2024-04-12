const orderByProps = require('./orderByProps')

test('сортировка свойств объекта', () => {
	const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }
	const propsOrder = ['name', 'level']

	const result = orderByProps(obj, propsOrder)

	expect(result).toEqual([
		{ key: 'name', value: 'мечник' },
		{ key: 'level', value: 2 },
		{ key: 'attack', value: 80 },
		{ key: 'defence', value: 40 },
		{ key: 'health', value: 10 },
	])
})
