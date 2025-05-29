package com.tidygo.tidygo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tidygo.tidygo.service.IServiceService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@RequestMapping("/service")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceController {

    final IServiceService serviceService;

    @GetMapping
    public String getAllServices(Model model) {
        model.addAttribute("services", serviceService.getAllServices());
        return "admin/service/service-management";
    }

}
