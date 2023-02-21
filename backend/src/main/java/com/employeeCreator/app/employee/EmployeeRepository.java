package com.employeeCreator.app.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

//    @Query("SELECT e FROM Employee e WHERE e.email = ?1")
//    Optional<Employee> findEmployeeByEmail(String email);

    @Query(value = "SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Employee e " +
            "WHERE e.email = ?1", nativeQuery = true)
    Boolean selectExistsEmail(String email);

}
