import { subtract, multiply, dotDivide } from 'mathjs'

import EliminationMethod from './Elimination'

export const JordanMethod = (A, B) => {
	const n = B.length
	let X = []
	let At = []
	let Bt = []
	const answer = EliminationMethod(A, B)
	At = answer.A
	Bt = answer.B
	for (let i = n - 1; i >= 0; i--) {
		for (let j = i - 1; j >= 0; j--) {
			const a = At[i][i],
				b = At[j][i]
			A[j] = subtract(multiply([...A[i]], b), multiply([...A[j]], a))
			B[j] = subtract(B[i] * b, B[j] * a)
		}
	}
	for (let i = 0; i < n; i++) {
		const c = A[i][i]
		At[i] = dotDivide(At[i], c)
		Bt[i] = dotDivide(Bt[i], c)
	}

	return { X: Bt }
}
