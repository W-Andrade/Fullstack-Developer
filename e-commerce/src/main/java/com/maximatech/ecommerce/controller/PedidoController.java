package com.maximatech.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maximatech.ecommerce.model.Pedido;
import com.maximatech.ecommerce.repository.PedidoRepository;

@RestController
@RequestMapping("/pedido")
public class PedidoController {
	
	@Autowired
	private PedidoRepository dao;
	
	@GetMapping
	public List<Pedido> listar(){
		return this.dao.findAll();
	}
	
	@PostMapping
	public Pedido salvar(@RequestBody Pedido pedido) {
		System.out.println(pedido);
		return this.dao.save(pedido);
	}
}
