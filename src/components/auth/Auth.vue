<template>
    <div class="auth">
        <div class="auth__login">
            <h1 v-if="loginForm" class="title-style">Autenticar</h1>
            <h1 v-if="!loginForm" class="title-style">Cadastre-se</h1>
            <v-text-field
                v-if="!loginForm"
                label="Nome"
                hint="Insira seu nome"
            >
            </v-text-field>
            <v-text-field
                label="E-mail"
                hint="Insira seu e-mail"
            >
            </v-text-field>
            <v-text-field
                label="Senha"
                hint="Insira sua senha"
                type="password"
            >
            </v-text-field>
            <v-text-field
                v-if="!loginForm"
                label="Confirme sua senha"
                hint="Deve ser exatamente igual a senha digitada anteriormente"
                type="password"
            >
            </v-text-field>
            <v-btn
                v-if="loginForm"
                color=""
            >
                Log-in
                <v-icon
                    right
                >
                    mdi-login
                </v-icon>
            </v-btn>
            <v-btn
                v-if="!loginForm"
                color=""
            >
                Cadastrar
                <v-icon
                    right
                >
                    mdi-plus

                </v-icon>
            </v-btn>
            <p v-if="loginForm" @click="changeAuthForm()" class="p-style">Não possui cadastro? clique aqui para criar um</p>
            <p v-if="!loginForm" @click="changeAuthForm()"  class="p-style">Já possui um cadastro? clique aqui para se autenticar</p>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    name: 'Auth',
    computed:{...mapGetters(['loginForm'])},
    methods:{...mapActions(['changeAuthForm'])}
}
</script>

<style>
.auth{
    background:#afb8b5;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
}

.p-style{
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  transition: 500ms;
}

.p-style:hover{
    color: #555555;
}

.auth__login{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
}
</style>