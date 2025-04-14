package com.example.springbootcrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootcrud.model.Employee;
import com.example.springbootcrud.repository.EmployeeRepository;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    // Create
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // Read All
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Read By ID
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    // Update
    public Employee updateEmployee(Long id, Employee newDetails) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee existingEmployee = optionalEmployee.get();
            existingEmployee.setName(newDetails.getName());
            existingEmployee.setEmail(newDetails.getEmail());
            existingEmployee.setDepartment(newDetails.getDepartment());
            return employeeRepository.save(existingEmployee);
        }
        return null;
    }

    // Delete
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
