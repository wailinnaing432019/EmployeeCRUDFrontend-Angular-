import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root',
})
export class EmployeeService
{
  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:9090";
  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save/employee`, employee);
  }

  public getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get/employee`);
  }

  public getEmployeeById(employeeId: number) {
    return this.httpClient.get<Employee>(`${this.api}/get/employee/${employeeId}`);
  }
  public deleteEmployee(employeeId: number) {
   return this.httpClient.delete(`${this.api}/delete/employee/${employeeId}`);
  }

  public updateEmployee(employee: Employee) {
    return this.httpClient.put<Employee>(`${this.api}/update/employee` , employee);
  }
}
