package com.maximatech.ecommerce.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("frete")
public class FreteController {
	
	@GetMapping
	public int calcularFrete() {
		Double freteItem = 5 + (Math.random() * 50) % 6;
		return freteItem.intValue(); 
	}
}
