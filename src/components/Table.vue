<template>
  <div className="table-outer">
    <table>
      <thead>
        <tr>
          <th class="sticky">A</th>
          <th>A</th>
          <th>A</th>
          <th>A</th>
          <th>A</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 30" :key="i">
          <td class="sticky">{{ i }}</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table-outer {
  overflow-x: auto;
  width: 100%;
  height: 100%;

  border: 1px solid #ccc;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  thead {
    position: sticky;
    z-index: 2;
    top: 0;
  }

  th,
  td {
    min-width: 33vw;
    padding: 10px;
    white-space: nowrap;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    &.sticky {
      z-index: 1;
      position: sticky;
      left: 0;
      background: white;
      border-right: 2px solid #ccc;
    }
  }

  th {
    text-align: left;
    background: #ddd;
    border-bottom: 2px solid #ccc;
    &.sticky {
      background: #ddd;
    }
  }

  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #333;
  }

  tr {
    &:last-child td {
      border-bottom: none;
    }
    &:nth-child(even) td {
      background: #eee;
    }
  }
}
</style>
