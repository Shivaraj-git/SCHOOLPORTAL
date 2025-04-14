package com.example.springbootcrud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.springbootcrud.model.Employee;
import com.example.springbootcrud.service.EmployeeService;

@SpringBootApplication
public class SpringbootcrudApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(SpringbootcrudApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("\n🔹 Demonstrating CRUD Operations in Spring Boot Application 🔹\n");

        // CREATE Employees
        Employee emp1 = new Employee("Shivaraj", "shivaraj@example.com", "CSE");
        Employee emp2 = new Employee("Muthukkumaran", "muthu@example.com", "IT");
        employeeService.createEmployee(emp1);
        employeeService.createEmployee(emp2);
        System.out.println("Created Employees");

        // READ All Employees
        List<Employee> employees = employeeService.getAllEmployees();
        System.out.println("\nList of Employees:");
        for (Employee emp : employees) {
            System.out.println(emp.getId() + " | " + emp.getName() + " | " + emp.getEmail() + " | " + emp.getDepartment());
        }

        // UPDATE Employee
        Employee updatedEmp = new Employee("Shivaraj", "shiva@example.com", "CSE");
        Employee empUpdated = employeeService.updateEmployee(emp2.getId(), updatedEmp);
        if (empUpdated != null) {
            System.out.println("\nUpdated Employee ID " + emp2.getId() + " to: " + empUpdated.getName() + ", " + empUpdated.getEmail() + ", " + empUpdated.getDepartment());
        }

        // DELETE Employee
        employeeService.deleteEmployee(emp1.getId());
        System.out.println("\nDeleted Employee ID " + emp1.getId());

        // READ All Employees Again
        System.out.println("\n📜 Employees After Deletion:");
        List<Employee> remainingEmployees = employeeService.getAllEmployees();
        for (Employee emp : remainingEmployees) {
            System.out.println(emp.getId() + " | " + emp.getName() + " | " + emp.getEmail() + " | " + emp.getDepartment());
        }

        System.out.println("\n✅ CRUD Demonstration Completed!\n");
    }
}
