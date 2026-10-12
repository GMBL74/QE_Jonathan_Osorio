function fn() {
    //  contraseña desde las variables de entorno del sistema
    var envPassword = java.lang.System.getenv('QA_USER_PASSWORD');
    
    var config = {
        baseUrl: 'https://serverest.dev',
        // Si no está configurada la variable en la máquina, usa un fallback por defecto
        securePassword: envPassword ? envPassword : 'DefaultSecurePassword123!'
    };


    function randomEmail() {
        return 'qa_' + java.util.UUID.randomUUID().toString() + '@gmail.com';
    }

    // Usuario Aleatorio
    function randomUser() {
        return {
            nome: 'Usuario QA',
            email: randomEmail(),
            password: securePassword,
            administrador: 'true'
        };
    }

    // Utilitarios para tests negativos
    function randomInvalidEmail_noAt() {
        return 'qa_' + java.util.UUID.randomUUID().toString() + 'mail.com';
    }

    function randomInvalidEmail_spaces() {
        return 'qa ' + java.util.UUID.randomUUID().toString() + '@mail .com';
    }

    function randomInvalidUser() {
        return {
            nome: 'Usuario QA Invalid',
            email: randomInvalidEmail_noAt(),
            password: securePassword,
            administrador: 'true'
        };
    }


    config.randomEmail = randomEmail;
    config.randomUser = randomUser;
    config.randomInvalidEmail_noAt = randomInvalidEmail_noAt;
    config.randomInvalidEmail_spaces = randomInvalidEmail_spaces;
    config.randomInvalidUser = randomInvalidUser;

    return config;
}
