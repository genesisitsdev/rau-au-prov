export const formatPrice = (price: number, culture: Locale = Locale.ptBr) => {
    const formatter = priceFormatter(culture);
    return formatter.format(price);
};

const priceFormatter = (culture: Locale) => {
    switch (culture) {
        case Locale.ptBr:
            return new Intl.NumberFormat(culture, {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              });
        default:
            throw new Error('Price locale not supported!');
    }
};

export enum Locale {
    ptBr = 'pt-BR',
}
