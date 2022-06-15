<script>
export default {
  data() {
    return {
      nova_turma: "",
      novo_aluno: "",
      alunos: [
        { turma: "Turma 1", name: "Camila" },
        { turma: "Turma 2", name: "Julia" },
        { turma: "Turma 3", name: "Larissa" },
        { turma: "Turma 4", name: "Vinicius" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_aluno !== "") {
        this.alunos.push({
          name: this.novo_aluno,
          turma: this.nova_turma,
        });
        this.novo_aluno = "";
      }
    },
    excluir(aluno) {
      const indice = this.alunos.indexOf(aluno);
      this.alunos.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h1>Gerenciar alunos</h1>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_aluno"
        @keyup.enter="salvar"
        placeholder="Aluno"
      />
      <input
        type="text"
        v-model="nova_turma"
        @keyup.enter="salvar"
        placeholder="Turma"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <td>Aluno</td>
            <td>Turma</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aluno in alunos" :key="aluno.id">
            <td>{{ aluno.name }}</td>
            <td>{{ aluno.turma }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(time)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
