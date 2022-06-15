<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      nova_turma: "",
      turmas: [
        { id: "f12bc7ce-5ca7-4cbf-ac6e-be3e59cb2862", name: "Turma 1" },
        { id: "b880659d-5d33-4607-ae19-8a22a738b509", name: "Turma 2" },
        { id: "0f97fea6-72ac-4ee0-bf1b-92516d3417e1", name: "Turma 3" },
        { id: "25c441be-e90a-4847-98a7-0d888e4c981f", name: "Turma 4" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_turma !== "") {
        const novo_id = uuid();
        this.turmas.push({
          id: novo_id,
          name: this.nova_turma,
        });
        this.nova_turma = "";
      }
    },
    excluir(turma) {
      const indice = this.turmas.indexOf(turma);
      this.turmas.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h1>Gerenciar turmas</h1>
    </div>
    <div class="form-input">
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
            <td>Turma</td>
            <td>Código da Turma</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="turma in turmas" :key="turma.id">
            <td>{{ turma.name }}</td>
            <td>{{ turma.id }}</td>
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
