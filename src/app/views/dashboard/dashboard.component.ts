import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Emprestimo } from '../../models/emprestimo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['leitor','livro', 'data', 'status', 'excluir', 'editar', 'capa' ];
  dataSource: Emprestimo[]=[]

  constructor(
    private emprestimoService:EmprestimoService,
    private notification: NotificationService) { }

  ngOnInit(): void {
    this.iniciarTabela();
  }

  private iniciarTabela(): void {
    this.emprestimoService.listarEmprestimos().subscribe(emprestimo => {
      this.dataSource = emprestimo;
    });
  }

  public deletarEmprestimo(id: string): void {
    this.emprestimoService.deletarEmprestimo(id).subscribe(response => {
      this.notification.showMessege("Apagado!", "success");
      this.iniciarTabela();
    });
  }



}
