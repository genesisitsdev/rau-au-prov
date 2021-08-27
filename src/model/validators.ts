
// O validador de e-mail Angular aceita um e-mail como "rob@example", talvez porque "rob@localhost" possa ser válido.
// O regex pureEmail não aceita "ryan@example" como um endereço de e-mail válido, o que eu acho que é uma coisa boa.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16
const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PURE_EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

// As senhas devem ter pelo menos 6 caracteres e devem conter pelo menos  um número, uma letra e um caractere especial.
// As senhas devem ter pelo menos 6 caracteres, letras maiusculas e minusculas.
// const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const PASSWORD_REGEXP = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;

// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const CPF_REGEXP = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const CNPJ_REGEXP = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;


// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const RG_REGEXP = /(\d{1,2})(\d{3})(\d{3})(\d{1})$/;

// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const AMBOS_REGEXP = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
const AMBOS_REGEXPDOC = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

//Telefones
const TELEFONE_REGEX = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

//Telefones
const CEP_REGEX = /^\d{5}-\d{3}$/;


export const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP,
  cpf: CPF_REGEXP,
  cnpj: CNPJ_REGEXP,
  rg: RG_REGEXP,
  ambos: AMBOS_REGEXP,
  ambosDoc: AMBOS_REGEXPDOC,
  telefone: TELEFONE_REGEX,
  cep: CEP_REGEX
};
