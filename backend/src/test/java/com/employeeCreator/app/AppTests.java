package com.employeeCreator.app;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


class AppTests {

	Calculator underTest = new Calculator();

	@Test
	void itShouldAddTwoNumbers() {
		// Given
		int numberOne = 10;
		int numberTwo = 20;

		// When
		int result = underTest.add(numberOne, numberTwo);

		// Then
		assertThat(result).isEqualTo(30);
	}

	class Calculator {
		int add(int a, int b) {return a + b;}
	}

}
