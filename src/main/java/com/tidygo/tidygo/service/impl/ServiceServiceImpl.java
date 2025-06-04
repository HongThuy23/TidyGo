package com.tidygo.tidygo.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;

import com.tidygo.tidygo.entity.Service;
import com.tidygo.tidygo.mapper.ServiceMapper;
import com.tidygo.tidygo.repository.ServiceRepository;
import com.tidygo.tidygo.request.ServiceRequest;
import com.tidygo.tidygo.response.ServiceResponse;
import com.tidygo.tidygo.service.IServiceService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceServiceImpl implements IServiceService {
    final ServiceRepository serviceRepository;
    final ServiceMapper serviceMapper;

    @Override
    public List<ServiceResponse> getAllServices() {
        return serviceMapper.toServiceResponse(serviceRepository.findAll());
    }

    @Override
    public ServiceResponse getServiceById(Long id) {
        return serviceMapper.toServiceResponse(serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy id dịch vụ: " + id)));
    }

    @Override
    public ServiceResponse updateService(Long id, ServiceRequest serviceRequest) {
        Service service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy id dịch vụ: " + id));
        BeanUtils.copyProperties(serviceRequest, service);
        return serviceMapper.toServiceResponse(serviceRepository.save(service));
    }

}
