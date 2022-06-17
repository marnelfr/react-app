import './TodoList.scss'


function TodoList() {
  return (
    <section className="container">
      <header className='text-center'>
        <h3>++ Todo List ++</h3>
      </header>
      <div className="row">
        <small className='ml-2'>> What I want to do today</small>
        <div className="col-12 border">
          <table className="table">
            {/* <thead>
              <tr>
                <th></th>
                <th>Todo</th>
                <th></th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Aller au cours demain matin <br/>
                  <small className='added-since'>Added since {(new Date()).toLocaleDateString()} at <b>{(new Date()).toLocaleTimeString()}</b></small>
                </td>
                <td>
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default TodoList;