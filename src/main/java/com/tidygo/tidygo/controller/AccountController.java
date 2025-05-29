package com.tidygo.tidygo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tidygo.tidygo.service.IAccountService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@RequestMapping("/account")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountController {

    final IAccountService accountService;

    @GetMapping
    public String getAllAccounts(Model model) {
        model.addAttribute("accounts", accountService.getAllAccounts());
        return "admin/account/account-management";
    }

    @GetMapping("/disable/{id}")
    public String disableAccount(@PathVariable Long id,
            RedirectAttributes redirectAttributes) {
        try {
            accountService.disableAccount(id);
            redirectAttributes.addFlashAttribute("successMessage", "Vô hiệu hóa tài khoản thành công!");
            return "redirect:/account";
        } catch (Exception e) {
            accountService.disableAccount(id);
            redirectAttributes.addFlashAttribute("errorMessage", "Vô hiệu hóa tài khoản thất bại!");
            return "redirect:/account";
        }
    }

    @GetMapping("/enable/{id}")
    public String enableAccount(@PathVariable Long id,
            RedirectAttributes redirectAttributes) {
        try {
            accountService.enableAccount(id);
            redirectAttributes.addFlashAttribute("successMessage", "Kích hoạt tài khoản thành công!");
            return "redirect:/account";
        } catch (Exception e) {
            accountService.enableAccount(id);
            redirectAttributes.addFlashAttribute("errorMessage", "Kích hoạt tài khoản thất bại!");
            return "redirect:/account";
        }
    }
}
