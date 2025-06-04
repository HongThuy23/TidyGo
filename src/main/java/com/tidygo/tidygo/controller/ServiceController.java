package com.tidygo.tidygo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tidygo.tidygo.request.ServiceRequest;
import com.tidygo.tidygo.service.IServiceService;
import com.tidygo.tidygo.service.ISubServiceService;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@RequestMapping("/service")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceController {

    final IServiceService serviceService;
    final ISubServiceService subServiceService;

    @GetMapping
    public String getAllServices(Model model) {
        model.addAttribute("services", serviceService.getAllServices());
        return "admin/service/service-management";
    }

    @GetMapping("/{id}")
    public String getServiceDetailById(Model model, @PathVariable Long id) {
        model.addAttribute("service", serviceService.getServiceById(id));
        model.addAttribute("subServices", subServiceService.getSubServicesByServiceId(id));
        return "admin/service/service-detail";
    }

    @GetMapping("/update/{id}")
    public String updateServiceById(Model model, @PathVariable Long id) {
        model.addAttribute("serviceId", id);
        model.addAttribute("service", serviceService.getServiceById(id));
        model.addAttribute("subServices", subServiceService.getSubServicesByServiceId(id));
        return "admin/service/service-update";
    }

    @PostMapping("/update/{id}")
    public String postMethodName(@PathVariable Long id, @Valid @ModelAttribute("service") ServiceRequest serviceRequest,
            BindingResult bindingResult, Model model,
            RedirectAttributes redirectAttributes) {
        try {
            if (bindingResult.hasErrors()) {
                model.addAttribute("serviceId", id);
                model.addAttribute("service", serviceRequest);
                model.addAttribute("subServices", subServiceService.getSubServicesByServiceId(id));
                return "admin/service/service-update";
            }
            model.addAttribute("service", serviceService.updateService(id,
                    serviceRequest));
            model.addAttribute("subServices", subServiceService.getSubServicesByServiceId(id));
            redirectAttributes.addFlashAttribute("successMessage", "Cập nhật dịch vụ thành công!");
            return "redirect:/service/update/" + id;
        } catch (Exception e) {
            model.addAttribute("serviceId", id);
            model.addAttribute("service", serviceRequest);
            model.addAttribute("subServices", subServiceService.getSubServicesByServiceId(id));
            redirectAttributes.addFlashAttribute("errorMessage", "Cập nhật dịch vụ thất bại!");
            return "redirect:/service/update/" + id;
        }

    }

}
