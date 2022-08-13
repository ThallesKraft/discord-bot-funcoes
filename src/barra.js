const splitBar = (total, current, size = 10, line = '▬', slider = '🌟') => {
	if (!total) throw new Error('O valor total não foi fornecido ou é inválido');
	if (!current && current !== 0) throw new Error('O valor atual não é fornecido ou é inválido');
	if (isNaN(total)) throw new Error('O valor total não é um número inteiro');
	if (isNaN(current)) throw new Error('O valor total não é um número inteiro');
	if (isNaN(size)) throw new Error('O tamanho não é um número inteiro');
	if (current > total) {
		const bar = line.repeat(size + 2);
		const percentage = (current / total) * 100;
		return [bar];
	} else {
		const percentage = current / total;
		const progress = Math.round((size * percentage));
		const emptyProgress = size - progress;
		const progressText = line.repeat(progress).replace(/.$/, slider);
		const emptyProgressText = line.repeat(emptyProgress);
		const bar = progressText + emptyProgressText;
		const calculated = percentage * 100;
		return [bar];
	}
};

const filledBar = (total, current, size = 10, line = '□', slider = '■') => {
	if (!total) throw new Error('O valor total não foi fornecido ou é inválido');
	if (!current && current !== 0) throw new Error('O valor atual não é fornecido ou é inválidod');
	if (isNaN(total)) throw new Error('O valor total não é um número inteiro');
	if (isNaN(current)) throw new Error('O valor total não é um número inteiro');
	if (isNaN(size)) throw new Error('O valor total não é um número inteiro');
	if (current > total) {
		const bar = slider.repeat(size + 2);
		const percentage = (current / total) * 100;
		return [bar];
	} else {
		const percentage = current / total;
		const progress = Math.round((size * percentage));
		const emptyProgress = size - progress;
		const progressText = slider.repeat(progress);
		const emptyProgressText = line.repeat(emptyProgress);
		const bar = progressText + emptyProgressText;
		const calculated = percentage * 100;
		return [bar];
	}
};

module.exports = { splitBar };
